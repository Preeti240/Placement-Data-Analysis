import csv
import pandas as pd

def csv_to_dict(file_path):
	object_list = []
	with open(file_path) as f:
		for row in csv.DictReader(f, skipinitialspace=True):
			object_dict = {}
			for key, val in row.items():
				if val.isdigit() and key != "jnf_str":
					object_dict[key] = int(val)
				else:
					object_dict[key] = val
			object_list.append(object_dict)
	return object_list


file_path = 'OutputFiles/placements_companies.csv'
placements_companies = csv_to_dict(file_path)

all_companies_profiles = pd.read_csv("OutputFiles/placements_companies_profile_all_info.csv", skiprows=[0], names=["about","cgpa_cutoff","com_id","contract","criteria","package","dep_str","jnf_id","name","profile","selection","type"])

for com in placements_companies:
	if com['com_id'] != 0:
		com['com_id']
		if not com['jnf_id']:
			match_idx = all_companies_profiles.index[all_companies_profiles['com_id'] == com['com_id']].tolist()
			full_name = all_companies_profiles.iloc[match_idx[0]]['name']
			jnf_ids = list(all_companies_profiles.iloc[match_idx]['jnf_id'])
			jnf_str = str(jnf_ids[0])
			for jnf_id in jnf_ids[1:]:
				jnf_str+=('_'+str(jnf_id))
			com['company_fullname'] = full_name
			com['jnf_str'] = jnf_str
		else:
			match_idx = all_companies_profiles.index[all_companies_profiles['com_id'] == com['com_id']].tolist()
			full_name = all_companies_profiles.iloc[match_idx[0]]['name']
			com['company_fullname'] = full_name

df = pd.DataFrame(placements_companies)
# df.to_csv("OutputFiles/placements_companies.csv", sep=',', index=False)