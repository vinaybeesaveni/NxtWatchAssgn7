import styled from 'styled-components'

export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-family: 'Roboto';
`

export const LoginCard = styled.div`
  width: 95%;
  padding: 20px;
  box-shadow: 13px 13px 10px #f8fafc, -13px -13px 10px #f8fafc;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`
export const LoginLogoImage = styled.img`
  width: 120px;
  height: 30px;
`
export const Form = styled.form`
  width: 100%;
  margin-top: 20px;
`
export const Label = styled.label`
  color: #475569;
  font-weight: 400;
  font-size: 15px;
`
export const Input = styled.input`
  width: 100%;
  border: 1px solid #94a3b8;
  border-radius: 5px;
  font-size: 15px;
  height: 40px;
  padding-left: 20px;
  margin-top: 10px;
  outline: none;
  margin-bottom: 20px;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
`

export const InputCheckbox = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 5px;
  outline: none;
`

export const ShowLabel = styled.label`
  color: #0f0f0f;
  font-weight: 500;
  font-size: 15px;
`
export const LoginButton = styled.button`
  border: none;
  width: 100%;
  background-color: #3b82f6;
  color: #ffffff;
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
  margin-top: 20px;
  outline: none;
`
export const ErrorMsg = styled.p`
  color: red;
  font-size: 14px;
`
