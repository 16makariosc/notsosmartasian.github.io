from selenium import webdriver

#cafe: 1920-commons; kings-court-english-house; new-college-house; houston-market
#meals: 1 = first meal of the day, 2 = second meal of the day, 3 = third meal of the day

def getMenu(cafe, meal): 
	driver = webdriver.PhantomJS()
	driver.get('http://university-of-pennsylvania.cafebonappetit.com/cafe/'+cafe+'/')
	content = driver.find_elements_by_css_selector('section#panel-daypart-menu-'+str(meal)+' .bg.dotted-leader-content')
	return content

menu = getMenu('new-college-house', 2)
for x in menu:
	print x.text

