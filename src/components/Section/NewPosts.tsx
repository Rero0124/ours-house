import { useState } from 'react';
import styled from 'styled-components';

const NewPostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const NewPostForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NewPostInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const NewPostTextarea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const NewPostButton = styled.button`
  padding: 8px 16px;
  background-color: #ff5a5f;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default function NewPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // 게시글을 서버로 전송하는 API 호출
      const response = await fetch('http://localhost:5000/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        // 게시글 작성 성공 시 처리
        setTitle('');
        setContent('');
        alert('게시글이 작성되었습니다.');
      } else {
        // 게시글 작성 실패 시 처리
        alert('게시글 작성에 실패했습니다.');
      }
    } catch (error) {
      console.log('게시글 작성 중 에러:', error);
      alert('게시글 작성 중 에러가 발생했습니다.');
    }
  };

  return (
    <NewPostContainer>
      <h2>새로운 게시글 작성</h2>
      <NewPostForm onSubmit={handleSubmit}>
        <NewPostInput
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <NewPostTextarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <NewPostButton type="submit">게시글 작성</NewPostButton>
      </NewPostForm>
    </NewPostContainer>
  );
}