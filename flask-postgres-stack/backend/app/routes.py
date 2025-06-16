from flask import Blueprint, request, jsonify
from .models import Chat, db

main = Blueprint('main', __name__)

@main.route('/api/chat', methods=['GET'])
def get_messages():
    messages = Chat.query.order_by(Chat.timestamp.desc()).all()
    return jsonify([message.to_dict() for message in messages])

@main.route('/api/chat', methods=['POST'])
def create_message():
    data = request.get_json()
    
    if not data or 'message' not in data or 'sender' not in data:
        return jsonify({'error': 'Missing required fields'}), 400
    
    new_message = Chat(
        message=data['message'],
        sender=data['sender']
    )
    
    db.session.add(new_message)
    db.session.commit()
    
    return jsonify(new_message.to_dict()), 201 