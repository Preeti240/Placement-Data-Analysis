import pandas as pd

placements_data = pd.read_csv('OutputFiles/placements.csv', skiprows=[0], names=['company', 'day', 'name', 'roll_no'])
companies_data = pd.read_csv('OutputFiles/companies_mining.csv', skiprows=[0], names=['com_id', 'company', 'ctc', 'jnf_id', 'profile', 'yop'])

companies_plac_data = list(placements_data.company.unique())
companies_comp_data = list(companies_data.company.unique())

companies_direct_match = list(set(companies_plac_data) & set(companies_comp_data))

companies_maping = {}
ultimate_list = []
for company in companies_direct_match:
	companies_maping[company]= company

companies_plac_diff = list(set(companies_plac_data) - set(companies_direct_match))
companies_comp_diff = list(set(companies_comp_data) - set(companies_direct_match))

for comp1 in companies_plac_diff:
	comp1_words = comp1.upper().split(' ')
	multi_match = []
	for comp2 in companies_comp_diff:
		comp2_words = comp2.upper().split(' ')
		if len(comp1_words) > len(comp2_words):
			if set(comp2_words).issubset(comp1_words):
				companies_maping[comp1] = comp2
				multi_match.append({
					comp1: comp2
					})
		else:
			if set(comp1_words).issubset(comp2_words):
				companies_maping[comp1] = comp2
				multi_match.append({
					comp1: comp2
					})
	if len(multi_match) > 1:
		print(multi_match)
	elif len(multi_match) == 0:
		print(comp1)

for key, value in companies_maping.items():
	print(key, "-------->", value)

print("\nTotal companies: {0}".format(len(companies_plac_data)))
print("Total companies for mining: {0}".format(len(companies_comp_data)))
print("Mapped {0} companies".format(len(list(companies_maping.keys()))))


placements_data.drop(['name', 'roll_no'], axis=1, inplace=True)
placements_data = placements_data.drop_duplicates(subset=['company', 'day'], keep='first')
placements_data['com_id'] = ''
placements_data['company_fullname'] = ''

for index, row in placements_data.iterrows():
	if row['company'] in list(companies_maping.keys()):
		company = companies_maping[row['company']]
		match_idx = companies_data.index[companies_data['company'] == company].tolist()
		match_vals = companies_data.iloc[match_idx]
		if len(match_idx) >= 1:
			row['com_id'] = match_vals.iloc[0]['com_id']
			row['company_fullname'] = match_vals.iloc[0]['company']
		else:
			print(company)

# placements_data.to_csv("OutputFiles/placements_companies.csv", sep=',', index=False)