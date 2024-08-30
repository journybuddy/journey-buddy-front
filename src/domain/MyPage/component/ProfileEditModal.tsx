import React, { useState, useEffect } from 'react';
import { Button, Input, Upload, Form } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Modal from '../../../components/Modal/Modal';
import { UploadFile } from 'antd/es/upload/interface';
import { getStoredToken, getStoredUser, setStoredUser } from '../../../utils/userStorage';
import { useRecoilState } from 'recoil';
import { useProfileEdit } from '../hooks/useProfileEdit';
import { profileUrlState } from '../../../recoil/atoms/productState';

interface IProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function ProfileEditModal({ isVisible, onClose }: IProps) {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [profileUrl, setProfileUrl] = useRecoilState(profileUrlState);
  const { mutate: editProfile } = useProfileEdit();

  useEffect(() => {
    const user = getStoredUser();
    if (user) {
      form.setFieldsValue({
        nickname: user.nickname,
        bio: user.email,
      });
      setProfileUrl(user.profile_image);
    }
  }, [form]);

  const handleFileChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setFileList(fileList);
  };

  const handleSubmit = async (values: any) => {
    const formData = new FormData();
    formData.append('nickname', values.nickname);
    formData.append('bio', values.bio);

    if (fileList.length > 0 && fileList[0].originFileObj) {
      formData.append('profileImage', fileList[0].originFileObj);
    }

    editProfile(formData, {
      onSuccess: (updatedUser) => {
        setStoredUser(updatedUser, getStoredToken() || '');
        setProfileUrl(updatedUser.profile_image);
        onClose();
      }
    });
  };

  return (
    <Modal
      title="프로필 수정"
      okText="저장"
      open={isVisible}
      onClose={onClose}
      onOk={() => form.submit()}
    >
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item
          label="닉네임"
          name="nickname"
          rules={[{ required: true, message: '닉네임을 입력하세요!' }]}
        >
          <Input placeholder="Nickname" />
        </Form.Item>
        <Form.Item label="소개" name="bio">
          <Input.TextArea placeholder="Bio" />
        </Form.Item>
        <Form.Item label="프로필 사진" name="profileImage">
          <Upload onChange={handleFileChange} fileList={fileList} listType="picture">
            <Button icon={<UploadOutlined />}>Upload Profile Image</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
}
