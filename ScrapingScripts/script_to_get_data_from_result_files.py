from tabula import read_pdf
import pandas as pd
import time

year = time.strftime("%y")
directory_path = "Files/"
placement_days = 10

def validate_roll(roll):
	if len(roll) == 9:
		if roll[:2].isdigit():
			if int(roll[:2]) < int(year):
				return True
	return False

data_list = []
offers_old = 0

for day in range(1, placement_days+1):
	file_path = directory_path + "day" + str(day) + ".pdf"
	json_list = read_pdf(file_path, multiple_tables=False, output_format='json', pages="all")
	for json_obj in json_list:
		data = json_obj['data']
		for row in data:
			if validate_roll(row[0]['text']):
				data_list.append({
					'roll_no': row[0]['text'],
					'name': row[1]['text'],
					'company': row[2]['text'],
					'day': 'Day-'+str(day)
					})
	offers_total = len(data_list)
	offers_new = offers_total - offers_old
	offers_old = offers_total
	print("Day {0} done!".format(day))
	print("Total offers in day {0}: {1}".format(day, offers_new))

df = pd.DataFrame(data_list)
# df.to_csv("OutputFiles/placements.csv", sep=',', index=False)