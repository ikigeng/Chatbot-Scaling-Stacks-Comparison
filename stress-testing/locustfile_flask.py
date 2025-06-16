from locust import HttpUser, task, between

class ChatUser(HttpUser):
    wait_time = between(1, 3)
    
    @task(2)
    def get_messages(self):
        self.client.get("/api/chat")
    
    @task(1)
    def post_message(self):
        self.client.post("/api/chat", json={
            "message": "Test message",
            "sender": "Test User"
        }) 