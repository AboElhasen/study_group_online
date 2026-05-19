import React, { RefObject } from 'react';
import { Paperclip, Image as ImageIcon, File as FileIcon, Send } from 'lucide-react';
import { CloudinaryUpload } from '../../components/CloudinaryUpload';
import styles from '../chatStyles';

interface ChatPanelProps {
  messages: any[];
  newMessage: string;
  messagesEndRef:React.RefObject<HTMLDivElement | null>;
  setNewMessage: (msg: string) => void;
  sendTextMessage: (msg: string) => void;
  isSending: boolean;
  showAttachmentMenu: boolean;
  setShowAttachmentMenu: (show: boolean) => void;
  handleUpload: (result: any, uploadType: 'image' | 'file') => void;
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
  handleEnterKey: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  selectedChatActive: boolean;
  isMember: boolean;
  activeTab: 'individuals' | 'groups' | null;
  currentUserId: number;
  selectedGroup: any;
  students: any[];
  receiver: number;
  handleRequestMemberShip: (studentId: number, groupId: number,studentName:string) => void;
}


const ChatPanel: React.FC<ChatPanelProps> = ({
  messages,
  newMessage,
  setNewMessage,
  messagesEndRef,
  sendTextMessage,
  isSending,
  showAttachmentMenu,
  setShowAttachmentMenu,
  handleUpload,
  textAreaRef,
  handleEnterKey,
  selectedChatActive,
  isMember,
  activeTab,
  currentUserId,
  selectedGroup,
  students,
  receiver,
  handleRequestMemberShip,
}) => {
  return (
    <div style={styles.chatPanel}>
      {activeTab && (
        <header style={styles.chatHeader}>
          <div>
            <h3 style={{ margin: 0, fontSize: '16px' }}>
              {activeTab === 'groups' ? selectedGroup?.name || 'Group Chat' : students.find((s: any) => s.Mat === receiver)?.name || 'student '}
            </h3>
            <span style={{ fontSize: '12px', color: '#9ca3af' }}>{activeTab === 'groups' ? 'Groupe ' : 'Conversation student'}</span>
          </div>
        </header>
      )}
      <div style={styles.messagesContainer}>
        {(Array.isArray(messages) ? messages : []).map((msg: any) => {
          const isSent = msg.senderId === currentUserId;
          return (
            <div ref={messagesEndRef} key={msg.id} style={{ display: 'flex', flexDirection: 'column', alignItems: isSent ? 'flex-end' : 'flex-start' }}>
              {!isSent && <span style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>{msg.sender?.name}</span>}
              <div  style={styles.messageBubble(isSent)}>
                {msg.type === 'text' && <p style={{ margin: 0 }}>{msg.content}</p>}
                {msg.type === 'image' && <img src={msg.resource?.filepath} style={{ maxWidth: '200px', borderRadius: '8px' }} />}
                {msg.type === 'file' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: isSent ? 'rgba(0,0,0,0.1)' : '#f8fafc', padding: '8px', borderRadius: '8px' }}>
                    <div style={{ background: '#ef4444', padding: '5px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold' }}>PDF</div>
                    <div style={{ fontSize: '12px' }}>{msg.resource?.name}</div>
                    <Send size={14} style={{ cursor: 'pointer' }} onClick={() => window.open(msg.resource.filepath, '_blank')} />
                  </div>
                )}
                <div style={{ fontSize: '10px', marginTop: '5px', opacity: 0.7, textAlign: 'right' }}>
                  {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          );
        })}
        {/* messagesEndRef is handled in parent */}
      </div>
      {selectedChatActive && (isMember || activeTab === 'individuals'  || currentUserId === 1 ? (
        <form style={styles.inputForm} onSubmit={e => { e.preventDefault(); sendTextMessage(newMessage); }}>
          <div style={{ position: 'relative' }}>
            <Paperclip size={20} color="#6b7280" style={{ cursor: 'pointer' }} onClick={() => setShowAttachmentMenu(!showAttachmentMenu)} />
            {showAttachmentMenu && (
              <div style={{ position: 'absolute', bottom: '100%', left: 0, background: '#000', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderRadius: '8px', zIndex: 10 }}>
                <CloudinaryUpload acceptType="image" onUpload={res => handleUpload(res, 'image')}>
                  <button type="button" style={{ display: 'flex', padding: '10px', border: 'none', background: 'none', width: '100%', cursor: 'pointer' }}><ImageIcon size={16} /> Image</button>
                </CloudinaryUpload>
                <CloudinaryUpload acceptType="file" onUpload={res => handleUpload(res, 'file')}>
                  <button type="button" style={{ display: 'flex', padding: '10px', border: 'none', background: 'none', width: '100%', cursor: 'pointer' }}><FileIcon size={16} /> Fichier</button>
                </CloudinaryUpload>
              </div>
            )}
          </div>
          <textarea
            ref={textAreaRef}
            rows={1}
            style={styles.textarea}
            placeholder="Envoyer un message..."
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            onKeyDown={handleEnterKey}
          />
          <button type="submit" disabled={!newMessage.trim()} style={{ background: '#3b82f6', border: 'none', color: '#fff', padding: '8px', borderRadius: '8px', cursor: 'pointer' }}>
            <Send size={18} />
          </button>
        </form>
      ) : (
        <form style={styles.inputForm} onSubmit={e => { e.preventDefault(); sendTextMessage(newMessage); }}>
          <button type="submit" style={{ border: 'none', backgroundColor: '#fff', color: '#00f', margin: '0px auto' }} onClick={() => handleRequestMemberShip(currentUserId, selectedGroup?.id!, students.find(s => s.Mat === currentUserId)?.name || 'Unknown Student')}>Submit a membership request</button>
        </form>
      ))}
    </div>
  );
};

export default ChatPanel;
