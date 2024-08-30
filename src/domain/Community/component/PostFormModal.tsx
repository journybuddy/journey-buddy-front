import React, { useState, useEffect } from 'react';
import { Button, Input, Upload, Form } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { usePostSave } from '../hooks/usePostSave';
import { usePostEdit } from '../hooks/usePostEdit';
import Modal from '../../../components/Modal/Modal';
import useModal from '../../../hooks/useModal';
import { UploadFile } from 'antd/es/upload/interface';
import { Post } from '../../../types/interface/Post';

interface IProps {
  initialValues?: Post;
  setInitialValues: React.Dispatch<React.SetStateAction<Post | undefined>>;
}

export default function PostFormModal({ initialValues, setInitialValues }: IProps) {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const { isSecondOpen, onSecondClose } = useModal();

  const { mutate: savePost } = usePostSave();
  const { mutate: editPost } = usePostEdit();

  useEffect(() => {
    form.resetFields();
    setFileList([]);
  }, [form, isSecondOpen]);

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue({
        title: initialValues.title,
        location: initialValues.location,
        content: initialValues.content,
      });

      if (initialValues.images) {
        const initialFileList = initialValues.images.map((img, index) => ({
          uid: String(index),
          name: `Image ${index + 1}`,
          status: 'done',
          url: img.url,
        })) as UploadFile[];
        setFileList(initialFileList);
      }
    }
  }, [initialValues, form]);

  const handleSubmit = (values: any) => {
    const formData = new FormData();
    formData.append('request', JSON.stringify({
      title: values.title,
      location: values.location,
      content: values.content,
    }));

    fileList.forEach((file: any) => {
      if (file.originFileObj) {
        formData.append('images', file.originFileObj);
      }
    });

    if (initialValues?.postId) {
      formData.append('postId', String(initialValues.postId)); 
      editPost(formData); 
    } else {
      savePost(formData); 
    }
    onClose()
  };

  const handleFileChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setFileList(fileList);
  };

  const onClose = () => {
    setInitialValues(undefined);
    onSecondClose();
  };

  return (
    <Modal
      title={`게시글 ${initialValues?.title ? '수정' : '등록'}`}
      okText={initialValues?.title ? '수정' : '등록'}
      subtitle="🔥 당신의 여행을 공유해주세요 🔥"
      open={isSecondOpen}
      onClose={onClose}
      onOk={() => form.submit()}
    >
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item label="제목" name="title" rules={[{ required: true, message: '제목을 입력하세요!' }]}>
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item label="장소" name="location" rules={[{ required: true, message: '장소를 입력하세요!' }]}>
          <Input placeholder="Location" />
        </Form.Item>
        <Form.Item label="내용" name="content" rules={[{ required: true, message: '내용을 입력하세요!' }]}>
          <Input.TextArea placeholder="Content" />
        </Form.Item>
        <Form.Item label="사진" name="image">
          <Upload onChange={handleFileChange} fileList={fileList} listType="picture">
            <Button icon={<UploadOutlined />}>Upload Image</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
}
