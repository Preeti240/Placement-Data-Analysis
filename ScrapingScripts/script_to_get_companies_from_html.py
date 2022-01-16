from bs4 import BeautifulSoup
import pandas as pd
import re

file = open("Files/companies_table_mining.html", "r")
soup = BeautifulSoup(file, "html.parser")

table = soup.select('tbody')[0]

tabs = []
for tr in table.find_all('tr'):
	id_values_str = tr.find_all('td')[8].select('a')[0]['onclick'][17:-2]
	id_values_list = re.findall('"([^"]*)"', id_values_str)
	tabs.append({
		'company': tr.find_all('td')[1].string.upper(),
		'profile': tr.find_all('td')[4].string,
		'ctc': tr.find_all('td')[6].string,
		'yop': id_values_list[0],
		'com_id': id_values_list[1],
		'jnf_id': id_values_list[2]
		})
df = pd.DataFrame(tabs)
# df.to_csv("OutputFiles/companies_mining.csv", sep=',', index=False)
file.close()