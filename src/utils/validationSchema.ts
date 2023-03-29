import * as yup from 'yup';

export const applicantSignUpSchema = yup.object({
  email: yup
    .string()
    .required('이메일은 필수 입력입니다.')
    .matches(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/, '이메일 형식에 맞지 않습니다.'),
  password: yup
    .string()
    .required('비밀번호는 필수 입력입니다.')
    .matches(/^[a-zA-Z0-9]+$/, '영문자, 숫자를 조합하여 입력해주세요.')
    .min(8, '비밀번호는 최소 8자리 이상 입력해 주세요.')
    .max(15, '비밀번호는 최대 15자리로 입력해 주세요.'),
  confirmPassword: yup
    .string()
    .required('비밀번호 확인은 필수 입력입니다.')
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.'),
  name: yup
    .string()
    .required('이름은 필수 입력입니다.')
    .matches(/^[a-zA-Z가-힣]+$/, '영문자, 한글을 입력해주세요.'),
  birthDate: yup.string().required('생년월일은 필수 입력입니다.'),
  phoneNumber: yup
    .string()
    .required('전화번호는 필수 입력입니다.')
    .matches(/^\d{3}-\d{3,4}-\d{4}$/, '전화번호 형식에 알맞지 않습니다. -를 포함해서 입력하세요'),
  gender: yup
    .string()
    .required('성별을 입력해주세요.')
    .matches(/[남자|여자]/, '아래 목록에서 선택해 주세요.'),
  sector: yup
    .string()
    .required('직무를 입력해주세요.')
    .matches(/[의사|간호사]/, '아래 목록에서 선택해 주세요.'),
  education: yup
    .string()
    .required('학력을 입력해주세요.')
    .matches(/[고졸|전문대졸]/, '아래 목록에서 선택해 주세요.'),
  workExperience: yup
    .string()
    .required('경력을 입력해주세요.')
    .matches(/[신입|1년차]/, '아래 목록에서 선택해 주세요.'),
});

export const companySignUpSchema = yup.object().shape({
  companyName: yup.string().required('기업명을 입력해 주세요.'),
  representative: yup.string().required('대표자명을 입력해 주세요.'),
  companyNum: yup
    .string()
    .required('사업자등록번호는 필수 입력입니다.')
    .matches(/^\d{3}-\d{2}-\d{5}$/, '사업자등록번호에 알맞지 않습니다. -를 포함해서 입력하세요'),
  email: yup
    .string()
    .required('이메일은 필수 입력입니다.')
    .matches(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/, '이메일 형식에 맞지 않습니다.'),
  password: yup
    .string()
    .required('비밀번호는 필수 입력입니다.')
    .matches(/^[a-zA-Z0-9]+$/, '영문자, 숫자를 조합하여 입력해주세요.')
    .min(8, '비밀번호는 최소 8자리 이상 입력해 주세요.')
    .max(15, '비밀번호는 최대 15자리로 입력해 주세요.'),
  confirmPassword: yup
    .string()
    .required('비밀번호 확인은 필수 입력입니다.')
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.'),
  contact: yup
    .string()
    .required('전화번호는 필수 입력입니다.')
    .matches(/^\d{2,3}-\d{3,4}-\d{4}$/, '전화번호 형식에 알맞지 않습니다. -를 포함해서 입력하세요'),
  zoneCode: yup
    .string()
    .required('우편번호는 필수 입력입니다.')
    .matches(/^\d{5}$/, '주소찾기 버튼을 통해 주소를 입력해 주세요.')
    .min(5, '주소찾기 버튼을 통해 주소를 입력해 주세요.')
    .max(5, '주소찾기 버튼을 통해 주소를 입력해 주세요.'),
  address: yup.string().required('주소는 필수 입력입니다.'),
});

export const loginSchema = yup.object().shape({
  id: yup
    .string()
    .required('아이디는 필수 입력입니다.')
    .matches(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/, '이메일 형식에 맞지 않습니다.'),
  pw: yup
    .string()
    .required('비밀번호는 필수 입력입니다.')
    .min(8, '비밀번호는 최소 8자리 이상 입력해 주세요.')
    .max(15, '비밀번호는 최대 15자리로 입력해 주세요.')
    .matches(/^[a-zA-Z0-9]{8,15}$/, '영문자, 숫자를 조합하여 입력해주세요.'),
});
