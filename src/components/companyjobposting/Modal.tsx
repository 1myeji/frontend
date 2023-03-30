import styled from 'styled-components';
import close from '../../assets/icons/close.png';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState, useRef, ChangeEvent } from 'react';
import selectfile from '../../assets/icons/selectfile.png';
import { IinputBoxProps, IModalProps } from '../../@types/props';
import { jobPostSchema } from '../../utils/validationSchema';

const Modal = ({ setIsModalOpen, setIsEditModal, isEditModal }: IModalProps) => {
  const fileRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, formState, setValue } = useForm<IPostingInput>({
    resolver: yupResolver(jobPostSchema),
    mode: 'onChange',
  });

  const onClickPosting = () => {};

  const onClickFile = () => {
    fileRef.current?.click();
  };

  const onClickModalClose = () => {
    setIsEditModal(false);
    setIsModalOpen(false);
  };

  const [selectedFile, setSelectedFile] = useState<string | undefined>('');

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files?.[0].name);
    setValue('file', event.target.files?.[0]);
    console.log(event.target.files?.[0]);
  };

  return (
    <ModalContainer>
      <ModalHeader>
        <HeaderTitle>채용 공고</HeaderTitle>
        <Close src={close} onClick={onClickModalClose} />
      </ModalHeader>
      <ModalContentsBox>
        <form onSubmit={handleSubmit(onClickPosting)}>
          <InputBox
            label='공고명'
            id='title'
            register={register}
            placeholder='2023년도 정규직 간호사 채용 공고'
            formState={formState}
          >
            <PostingButton>{isEditModal ? '수정하기' : '등록하기'}</PostingButton>
          </InputBox>
          <QualificationsBox>
            <QualificationsTitle>모집분야 및 지원자격</QualificationsTitle>
            <InputBox
              label='직종'
              id='sector'
              register={register}
              placeholder='간호직 > 간호사'
              formState={formState}
            />
            <InputBox
              label='경력'
              id='experience'
              register={register}
              placeholder='신입 / 인턴 경험'
              formState={formState}
            />
            <InputBox label='학력' id='education' register={register} placeholder='학력무관' formState={formState} />
          </QualificationsBox>
          <InputBox label='모집인원' id='maxapplicants' register={register} placeholder='4명' formState={formState} />
          <InputBox label='마감일' id='duedate' register={register} placeholder='2023.04.12' formState={formState} />
          <PostingTitleBox>
            <Label htmlFor='file'>공고 PDF</Label>
            <InputFile
              id='file'
              type='file'
              {...register('file')}
              ref={fileRef}
              onChange={handleFileSelect}
              accept='.pdf'
            />
            <FileTitleBox>
              <p>{selectedFile ? `선택된 파일 : ${selectedFile}` : '파일을 선택해주세요.'}</p>
            </FileTitleBox>
            <SelectFile src={selectfile} onClick={onClickFile} />
            <ErrorMessage>{formState.errors.file?.message}</ErrorMessage>
          </PostingTitleBox>
        </form>
      </ModalContentsBox>
    </ModalContainer>
  );
};

const InputBox = ({ label, register, placeholder, children, id, formState }: IinputBoxProps) => {
  return (
    <PostingTitleBox>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type='text' {...register(id)} placeholder={placeholder} />
      <ErrorMessage>{formState.errors[id]?.message}</ErrorMessage>
      {children}
    </PostingTitleBox>
  );
};

export default Modal;

const ModalContainer = styled.div`
  width: 1056px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(67, 87, 172, 0.19);
  border-radius: 19px;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 63px;
  padding: 0 44px;
  border-bottom: 1px solid #ececec;
`;

const ModalContentsBox = styled.div`
  padding: 40px 72px;
`;

const HeaderTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
`;

const PostingTitleBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
`;

const Label = styled.label`
  width: 90px;
  font-weight: 700;
  font-size: 16px;
`;

const Input = styled.input`
  width: 360px;
  height: 30px;
  border: 1px solid #7b7b7b;
  border-radius: 20px;
  background: #ffffff;
  padding-top: 2px;
`;

const InputFile = styled(Input)`
  display: none;
`;

const PostingButton = styled.button`
  height: 40px;
  width: 140px;
  background: var(--color-blue);
  border-radius: 20px;
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
  position: absolute;
  right: -20px;
`;

const QualificationsBox = styled.div`
  margin-top: 40px;
  margin-bottom: 60px;
`;

const QualificationsTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  color: var(--color-blue);
  margin-bottom: 32px;
`;

const FileTitleBox = styled.div`
  width: 400px;
  height: 40px;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const SelectFile = styled.img`
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  color: #e95656;
  margin-left: 10px;
`;

const Close = styled(SelectFile)``;