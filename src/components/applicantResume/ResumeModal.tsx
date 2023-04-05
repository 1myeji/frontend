import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalBackground } from '@components/mainhome/EmailModal';
import { ViewPDF } from './pdf/ViewPDF';
import { pdfjs } from 'react-pdf';

// workerSrc 정의 하지 않으면 pdf 보여지지 않습니다.
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResumeModal = ({ setResumeModal }: { setResumeModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [pdfFileList, setPdfFileList] = useState<Array<File>>([]);
  const [pdfUrl, setPdfUrl] = useState<string>();
  const [showModal, setShowModal] = useState(false);

  const getUrl = (file: File) => {
    const blob = new Blob([file]);
    const pdfUrl = URL.createObjectURL(blob);
    setPdfUrl(pdfUrl);
  };

  const onPdfFileUpload = (e: any) => {
    const selectedList: Array<File> = Array.from(e.target.files);
    const getAddList = selectedList.map(item => item);
    getUrl(getAddList[0]);
    setPdfFileList(selectedList);
  };

  const onDeleteTarget = () => {
    setPdfFileList([]);
  };

  const onUrlClick = (e: any) => {
    setShowModal(true);
  };
  const onPdfClose = (e: any) => {
    setShowModal(false);
  };

  const FileResultList = () => {
    return (
      <>
        {pdfFileList.map((item, index) => (
          <FileResultBody key={index}>
            <FileResultRow>
              <p>{item.name}</p>
              <div>
                <span onClick={onUrlClick}>미리보기</span>
                <button onClick={onDeleteTarget}>
                  <img src='/icons/close.png' alt='닫기' />
                </button>
              </div>
            </FileResultRow>
          </FileResultBody>
        ))}
      </>
    );
  };

  return (
    <ModalBackground>
      <div id='container'>
        <header>
          <h3>이력서 등록</h3>
          <img src='/icons/close.png' alt='닫기' onClick={() => setResumeModal(false)} />
        </header>
        <div id='content'>
          <p style={{ marginTop: '20px', fontSize: '15px' }}>이력서는 PDF 형식으로 올려주시기 바랍니다.</p>
          <MainContainer>
            <ModalOverlay showModal={showModal}>
              <PdfContainer>
                <ButtonContainer>
                  <button onClick={onPdfClose}>
                    <img src='\icons\close.png' alt='닫기' />
                  </button>
                </ButtonContainer>
                <ViewPDF fileUrl={pdfUrl} />
              </PdfContainer>
            </ModalOverlay>

            {pdfFileList.length === 0 ? (
              <form>
                <label htmlFor='uploadFile'>파일 업로드하기</label>
                <input
                  type='file'
                  id='uploadFile'
                  accept='application/pdf'
                  multiple={true}
                  onChange={onPdfFileUpload}
                />
              </form>
            ) : (
              <FileResultList />
            )}
          </MainContainer>
        </div>
        <div id='buttons'>
          <button onClick={() => setResumeModal(false)}>취소</button>
          <button onClick={() => {}}>등록</button>
        </div>
      </div>
    </ModalBackground>
  );
};

const MainContainer = styled.div`
  height: 120px;
  margin-top: 20px;
  form {
    label {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 140px;
      height: 40px;
      line-height: 41px;
      border-radius: 8px;
      background-color: var(--color-gray-100);
      cursor: pointer;
    }
    input {
      position: absolute;
      width: 0;
      height: 0;
      padding: 0;
      overflow: hidden;
      border: 0;
    }
  }
`;

const FileResultBody = styled.div`
  display: flex;
  width: 100%;
`;
const FileResultRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  box-shadow: rgba(67, 87, 172, 0.15) 2px 2px 10px 2px;
  border-radius: 20px;
  -webkit-box-align: center;
  padding: 20px 30px;
  p {
    color: var(--color-gray-600);
    font-size: 16px;
    font-weight: bold;
    padding-top: 3px;
  }
  div {
    display: flex;
    gap: 20px;
    span {
      font-size: 13px;
      font-weight: bold;
      background-color: var(--color-gray-400);
      color: rgb(255, 255, 255);
      border-radius: 20px;
      line-height: 29px;
      height: 28px;
      padding: 0px 12px;
      cursor: pointer;
    }
    button {
      background: transparent;
    }
  }
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${({ showModal }: { showModal: boolean }) => (showModal ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const PdfContainer = styled.div`
  display: flex;
  position: relative;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 10;
  button {
    width: 30px;
    height: 30px;
    background: transparent;
    padding: 0;
  }
`;

export default ResumeModal;