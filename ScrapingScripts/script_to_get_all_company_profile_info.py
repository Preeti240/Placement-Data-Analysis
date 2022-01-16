import csv
import requests
import pandas as pd
from bs4 import BeautifulSoup
from script_to_get_companies_info import GetCompaniesInfo 
from script_to_get_companies_profile_info import GetCompaniesProfileInfo 

def csv_to_dict(file_path):
	object_list = []
	try:
		with open(file_path) as f:
			for row in csv.DictReader(f, skipinitialspace=True):
				object_dict = {}
				for key, val in row.items():
					if val.isdigit():
						object_dict[key] = int(val)
					else:
						object_dict[key] = val
				object_list.append(object_dict)
		return object_list
	except:
		return object_list


min_com_id = 1
max_com_id = 754
group_size = 10


print("================= Started scraping companies info =================")

file_path = 'OutputFiles/placements_companies_all_info.csv'
for i in range(int(max_com_id/group_size)+1):
	start_id = i*group_size+1
	stop_id = max_com_id if i == int(max_com_id/group_size) else i*group_size+group_size
	com_ids_all = list(range(start_id, stop_id+1))

	print("Scraping between {0} to {1} ...............".format(start_id, stop_id))
	
	comp_obj = GetCompaniesInfo(com_ids=com_ids_all)
	company_dict_list = comp_obj.get_data()

	company_dict_list_old = csv_to_dict(file_path)
	for obj in company_dict_list:
		company_dict_list_old.append(obj)

	df = pd.DataFrame(company_dict_list_old)
	# df.to_csv(file_path, sep=',', index=False)

	print("Scraped till {0}!".format(stop_id))


print("================== Started scraping profile info ==================")

file_path = 'OutputFiles/placements_companies_profile_all_info.csv'
for i in range(int((min_com_id)/group_size), int((max_com_id)/group_size)+1):
	company_dict_list = []
	start_id = i*group_size+1
	stop_id = max_com_id if i == int(max_com_id/group_size) else i*group_size+group_size
	com_ids = list(range(start_id, stop_id+1))

	print("Scraping between {0} to {1} ...............".format(start_id, stop_id))

	for com in com_ids:
		j=1
		while True:
			jnf_obj = GetCompaniesProfileInfo(com_ids=[[com, j]])
			request_url = jnf_obj.get_request_url(com_id=com, jnf_id=j)
			page = requests.get(request_url)
			soup = BeautifulSoup(page.text, "html.parser")
			try:
				table = soup.select('table')[0]
				company_dict = jnf_obj.get_data()
				if company_dict:
					company_dict_list.append(company_dict[0])
				j+=1
			except:
				print("com_id: {0}, jnf_id: {1} response code: 500!".format(com, j))
				j+=1
				break

	company_dict_list_old = csv_to_dict(file_path)
	for obj in company_dict_list:
		company_dict_list_old.append(obj)

	df = pd.DataFrame(company_dict_list_old)
	# df.to_csv(file_path, sep=',', index=False)

	print("Scraped till {0}!".format(stop_id))


print("================= Started scraping manual entries =================")

file_path = 'OutputFiles/placements_companies_profile_all_info.csv'
manual_entries = [[239,2],[39,2],[39,3],[39,4]]
jnf_obj = GetCompaniesProfileInfo(com_ids=manual_entries)
company_dict_list = jnf_obj.get_data()

company_dict_list_old = csv_to_dict(file_path)
for obj in company_dict_list:
	company_dict_list_old.append(obj)

df = pd.DataFrame(company_dict_list_old)
# df.to_csv(file_path, sep=',', index=False)