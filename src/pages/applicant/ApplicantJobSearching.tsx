import { ChangeEvent, FormEvent, useState } from 'react';
import { MainContainer } from '../company/CompanyJobPosting';
import styled from 'styled-components';
import JobSearchingList from './../../components/applicantJobSearching/JobSearchingList';
import { searchingOptions, sectorOptions } from '@/constants/jobPostingOptions';
import { useAppSelector } from '@/hooks/useDispatchHooks';
import { useQuery } from '@tanstack/react-query';
import { getJobPostsSearch } from '@/api/applicantApi';
import axios from 'axios';

const ApplicantJobSearching = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [searchingData, setSearchingData] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const applicantUser = useAppSelector(state => state.applicantUser);

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const onChangeSearchData = (event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
    setSearchingData(event.target.value);
  };

  const { data: searchData } = useQuery(
    ['jobPosts', selectedOption, searchingData, searchKey],
    () => getJobPostsSearch(selectedOption, searchingData),
    {
      enabled: !!selectedOption && !!searchingData,
    },
  );

  console.log('searchData', searchData);

  const onSubmitSearch = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    console.log(selectedOption);
    console.log(searchingData);
    setSearchKey(Date.now().toString());
  };

  return (
    <MainContainer>
      <div className='headerBox'>
        <BannerBox>
          <BlueBox>
            <Content>
              {applicantUser?.applicantName}님의 <br /> 맞춤 병원탐색
            </Content>
            <img src='/icons/people.png' />
          </BlueBox>
          <YellowBox>
            <Content>
              나를 가장 잘 표현한
              <br />
              이력서 만들기 전략
            </Content>
            <img src='/icons/resumeImg.png' />
          </YellowBox>
        </BannerBox>
        <SearchTab>공고 탐색</SearchTab>
        <SearchBox>
          <SelectBox value={selectedOption} onChange={handleOptionChange}>
            <option value=''>선택하세요</option>
            <option value='직무'>직무</option>
            <option value='학력'>학력</option>
            <option value='경력'>경력</option>
            <option value='공고제목'>공고제목</option>
            <option value='회사'>회사</option>
          </SelectBox>
          {(selectedOption === '직무' || selectedOption === '학력' || selectedOption === '경력') && (
            <Form onSubmit={onSubmitSearch}>
              <SelectBox onChange={onChangeSearchData}>
                <option value=''>선택하세요</option>
                {searchingOptions?.[selectedOption].map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </SelectBox>
            </Form>
          )}
          {(selectedOption === '공고제목' || selectedOption === '회사') && (
            <form onSubmit={onSubmitSearch}>
              <SearchInputWrapper>
                <img src='/icons/search.png' />
                <SearchInput placeholder='검색어를 입력해주세요.' onChange={onChangeSearchData}></SearchInput>
              </SearchInputWrapper>
              <button style={{ display: 'none' }}></button>
            </form>
          )}
        </SearchBox>
        <ListHeader>공고 리스트</ListHeader>
      </div>
      {searchData?.content?.map((data: JobPostsSearchData, index: number) => (
        <JobSearchingList key={data.jobpostId} index={index} searchData={data} />
      ))}
      {(searchData?.content?.length === 0 || !searchData || searchData?.errorMessage) && (
        <Nothing>리스트가 없습니다.</Nothing>
      )}
    </MainContainer>
  );
};

export default ApplicantJobSearching;

const Nothing = styled.p`
  margin: auto;
  width: fit-content;
  margin-top: 50px;
  font-size: 18px;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BannerBox = styled.div`
  display: flex;
  gap: 19px;
`;
const BlueBox = styled.div`
  background: var(--color-primary-100);
  border-radius: 19px;
  width: 60%;
  height: 171px;
  padding-top: 28px;
  padding-left: 38px;
  display: flex;
  justify-content: space-between;
  img {
    width: 60%;
  }
`;

const Content = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  line-height: 22px;
`;

const YellowBox = styled.div`
  background: #ffc847;
  border-radius: 19px;
  width: 40%;
  height: 171px;
  padding-top: 28px;
  padding-left: 38px;
  display: flex;
  justify-content: space-between;
  img {
    margin-right: 20px;
    width: 35%;
    margin-top: 50px;
  }
`;

const SearchTab = styled.h2`
  margin-top: 56px;
  font-weight: 700;
  font-size: 20px;
  color: var(--color-primary-100);
  border-bottom: 5px solid;
  width: 80px;
  padding: 0 20px 10px;
`;

const SearchBox = styled.div`
  margin-top: 36px;
  display: flex;
  align-items: center;
`;

const SelectBox = styled.select`
  border: 1px solid var(--color-primary-100);
  border-radius: 20px;
  padding: 6px 10px 4px;
  color: var(--color-primary-100);
  width: 150px;
  height: 28px;
  margin-right: 20px;
`;

const SearchInputWrapper = styled.div`
  position: relative;

  img {
    height: 18px;
    position: absolute;
    left: 15px;
    top: 9px;
  }
`;

const SearchInput = styled.input`
  border: 3px solid rgba(67, 87, 172, 0.17);
  border-radius: 28px;
  color: var(--color-primary-100);
  height: 28px;
  width: 459px;
  padding-top: 2.5px;
  padding-left: 40px;
  font-size: 14px;
  ::placeholder {
    font-size: 14px;
  }
`;

const ListHeader = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin-top: 36px;
  margin-bottom: 20px;
`;

const SearchBtn = styled.button`
  background: var(--color-primary-100);
  border-radius: 20px;
  color: #ffffff;
  width: 90px;
  height: 30px;
`;
