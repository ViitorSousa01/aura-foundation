from services.assistant_ml import generate_response

def test_generate_response():
    prompt = "Hello"
    response = generate_response(prompt)
    assert response["confidence"] > 0.9
    assert "response" in response
