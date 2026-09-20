import urllib.request, re
req = urllib.request.Request('https://unsplash.com/s/photos/flight-attendant', headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')
ids = re.findall(r'"id":"([a-zA-Z0-9_-]{11})"', html)
print(list(set(ids))[:5])
