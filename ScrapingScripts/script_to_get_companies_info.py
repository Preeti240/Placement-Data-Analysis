from bs4 import BeautifulSoup
from config_local import *
import pandas as pd
import requests
import re

class GetCompaniesInfo(object):
	"""docstring for GetCompaniesInfo"""
	def __init__(self, com_ids, ssoToken=SSOTOKEN):
		super(GetCompaniesInfo, self).__init__()
		self._com_ids = com_ids
		self._ssoToken = ssoToken
		self._key_mapping = {
			'Sector': 'sector',
			'City': 'city',
			'About the company': 'about',
			'Reference': 'reference',
			'Website': 'website',
			'Company Name': 'company',
			'Country': 'country',
			'Address': 'address',
			'Category': 'category',
			'Employee Strength': 'employees',
			'Annual Turnover': 'turnover',
			'Zipcode': 'zipcode'
		}

	def get_data(self):
		company_dict_list = []
		com_count = 0
		for com_id in self._com_ids:
			try:
				print("Scraping com_id: {0} ...............".format(com_id))
				page = requests.get(self.get_request_url(com_id))
				soup = BeautifulSoup(page.text, "html.parser")

				table = soup.select('table')[0]
				data_raw = table.find_all('td')
				del data_raw[0], data_raw[0], data_raw[4], data_raw[4]

				company_dict = {}
				for i in range(int(len(data_raw)/2)):
					company_dict[data_raw[i*2].string] = self.remove_special_chars(data_raw[i*2+1].string)

				old_keys = list(company_dict.keys())

				for key in old_keys:
					company_dict[self._key_mapping[key]] = company_dict[key]
					del company_dict[key]
				company_dict['com_id'] = com_id
				company_dict_list.append(company_dict)
				com_count += 1
				print("Scraped com_id: {0};\t {1} out of {2} Done! ".format(com_id, com_count, len(self._com_ids)))
			except Exception as e:
				print(e)
		return company_dict_list

	def get_request_url(self, com_id):
		url = "https://erp.iitkgp.ac.in/TrainingPlacementSSO/TPComView.jsp"
		params = {
			'yop': "2019-2020",
			'user_type': "SU",
			'com_id': com_id,
			'ssoToken': self._ssoToken
		}
		first = True
		for key, val in params.items():
			if first:
				request_url = url+'?'+key+'='+str(val)
				first = False
			else: 
				request_url += '&'+key+'='+str(val)
		return request_url

	def remove_special_chars(self, string):
		if string:
			final_string = re.sub('  ', '', string)
			return final_string
		else:
			return ''


if __name__ == '__main__':
	placements_data = pd.read_csv("OutputFiles/placements_companies.csv", skiprows=[0], names=['company','day','com_id','jnf_id','company_fullname'])
	com_ids = list(placements_data['com_id'].dropna(how='any',axis=0).astype(int))

	comp_obj = GetCompaniesInfo(com_ids=com_ids)
	company_dict_list = comp_obj.get_data()

	df = pd.DataFrame(company_dict_list)
	# df.to_csv("OutputFiles/placements_companies_info.csv", sep=',', index=False)