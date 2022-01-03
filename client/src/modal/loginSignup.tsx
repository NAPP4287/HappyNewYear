import {
  ModalWrap,
  ModalBox,
  SelectLoginSignup,
  LoginWrap,
  SignupWrap,
  InputWrap,
} from '../style/styleLoginSignup';
import { useState } from 'react';

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);

  const handleChangeSignup = () => {
    setIsLogin(false);
  };

  const handleChangeLogin = () => {
    setIsLogin(true);
  };

  return (
    <div>
      <ModalWrap>
        <ModalBox>
          <SelectLoginSignup>
            <li
              className={isLogin ? 'changeColor' : ''}
              onClick={handleChangeLogin}
            >
              로그인 하기
            </li>
            <li
              className={isLogin ? '' : 'changeColor'}
              onClick={handleChangeSignup}
            >
              회원가입 하기
            </li>
          </SelectLoginSignup>
          {isLogin ? (
            <LoginWrap>
              <InputWrap>
                <div className='inputWrap'>
                  <span>아이디</span>
                  <input />
                </div>
                <div className='inputWrap'>
                  <span>비밀번호</span>
                  <input />
                </div>
              </InputWrap>
              <button>로그인</button>
              <button>취소</button>
            </LoginWrap>
          ) : (
            <SignupWrap>
              <InputWrap>
                <div className='inputWrap'>
                  <span>아이디</span>
                  <input />
                </div>
                <div className='inputWrap'>
                  <span>비밀번호</span>
                  <input />
                </div>
                <div className='inputWrap'>
                  <span>비밀번호 재입력</span>
                  <input />
                </div>
              </InputWrap>
              <button>회원가입</button>
              <button>취소</button>
            </SignupWrap>
          )}
        </ModalBox>
      </ModalWrap>
    </div>
  );
}

export default LoginSignup;
