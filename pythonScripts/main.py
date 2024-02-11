import firebase_admin
from firebase_admin import credentials, storage, db

# Initialize Firebase
cred = credentials.Certificate('houses-react-db-firebase-adminsdk-rxl7g-8c2bbbccf9.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://houses-react-db-default-rtdb.firebaseio.com/',
    'storageBucket': 'houses-react-db.appspot.com'
})


def upload_image(image_path):
    print(f"Uploading image: {image_path}")
    bucket = storage.bucket()
    blob = bucket.blob(image_path)
    blob.upload_from_filename(image_path)

    # Make the file publicly readable
    blob.make_public()
    print(f"Image uploaded and accessible at: {blob.public_url}")
    return blob.public_url


def write_data_to_database(data):
    print(f"Writing data to database for: {data['name']}")
    ref = db.reference('/')
    houses_ref = ref.child('houses')
    houses_ref.push(data)
    print(f"Data written to database for: {data['name']}")


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    housing_data = [
        {
            "id": 0,
            "name": "Acme Fresh Start Housing",
            "city": "Chicago",
            "state": "IL",
            "photo": "assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
            "availableUnits": 4,
            "wifi": True,
            "laundry": True
        },
        {
            "id": 1,
            "name": "A113 Transitional Housing",
            "city": "Santa Monica",
            "state": "CA",
            "photo": "assets/brandon-griggs-wR11KBaB86U-unsplash.jpg",
            "availableUnits": 0,
            "wifi": False,
            "laundry": True
        },
        {
            "id": 2,
            "name": "Warm Beds Housing Support",
            "city": "Juneau",
            "state": "AK",
            "photo": "assets/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg",
            "availableUnits": 1,
            "wifi": False,
            "laundry": False
        },
        {
            "id": 3,
            "name": "Homesteady Housing",
            "city": "Chicago",
            "state": "IL",
            "photo": "assets/ian-macdonald-W8z6aiwfi1E-unsplash.jpg",
            "availableUnits": 1,
            "wifi": True,
            "laundry": False
        },
        {
            "id": 4,
            "name": "Happy Homes Group",
            "city": "Gary",
            "state": "IN",
            "photo": "assets/krzysztof-hepner-978RAXoXnH4-unsplash.jpg",
            "availableUnits": 1,
            "wifi": True,
            "laundry": False
        },
        {
            "id": 5,
            "name": "Hopeful Apartment Group",
            "city": "Oakland",
            "state": "CA",
            "photo": "assets/r-architecture-JvQ0Q5IkeMM-unsplash.jpg",
            "availableUnits": 2,
            "wifi": True,
            "laundry": True
        },
        {
            "id": 6,
            "name": "Seriously Safe Towns",
            "city": "Oakland",
            "state": "CA",
            "photo": "assets/phil-hearing-IYfp2Ixe9nM-unsplash.jpg",
            "availableUnits": 5,
            "wifi": True,
            "laundry": True
        },
        {
            "id": 7,
            "name": "Hopeful Housing Solutions",
            "city": "Oakland",
            "state": "CA",
            "photo": "assets/r-architecture-GGupkreKwxA-unsplash.jpg",
            "availableUnits": 2,
            "wifi": True,
            "laundry": True
        },
        {
            "id": 8,
            "name": "Seriously Safe Towns",
            "city": "Oakland",
            "state": "CA",
            "photo": "assets/saru-robert-9rP3mxf8qWI-unsplash.jpg",
            "availableUnits": 10,
            "wifi": False,
            "laundry": False
        },
        {
            "id": 9,
            "name": "Capital Safe Towns",
            "city": "Portland",
            "state": "OR",
            "photo": "assets/webaliser-_TPTXZd9mOo-unsplash.jpg",
            "availableUnits": 6,
            "wifi": True,
            "laundry": True
        }
    ]

    for house in housing_data:
        house['photo'] = upload_image(house['photo'])
        write_data_to_database(house)
