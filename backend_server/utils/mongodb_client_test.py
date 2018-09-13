import mongodb_client as client

def test_basic():
    db = client.get_db('test')
    db.test.drop()
    assert db.test.count() == 0

    db.test.insert({'test': 1})
    assert db.test.count() == 1

    db.test.drop()
    assert db.test.count() == 0

    print("tests have all passed")
 
# Cannot be executed if the file is imported
# The user has to execute this profile to run the test function
if __name__ == "__main__":
    test_basic()