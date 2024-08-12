import requests

def get_api_data():
    url = 'https://gfhfgf6f2g6fdgfd.vercel.app/api/getM3u'
    params = {
        'sid': 'tplay_A',
        'id': '123456789',
        'sname': 'tataP',
        'tkn': 'xeotpxyastrplg'
    }
    response = requests.get(url, params=params)
    if response.status_code == 200:
        return response.json()
    else:
        return {'error': 'Request failed'}

data = get_api_data()
print(data)
