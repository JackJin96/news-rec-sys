from cloudAMQP_client import CloudAMQPClient

CLOUDAMQPURL = "amqp://wgywavma:LknOYsnIwoWwzGRI9s5qd3J4tPjxKW7J@termite.rmq.cloudamqp.com/wgywavma"
TEST_QUEUE_NAME = "test"

def test_basic():
    client = CloudAMQPClient(CLOUDAMQPURL, TEST_QUEUE_NAME)

    sentMsg = {"test" : "test"}
    client.sendMessage(sentMsg)

    receivedMsg = client.getMessage()

    assert sentMsg == receivedMsg
    print("test_basic passed!")

if __name__ == "__main__":
    test_basic()
