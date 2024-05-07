import styled from 'styled-components'

export const MainContainer = styled.form`
  display: flex;
  flex-direction: row;
  border: 1px solid #d7dfe9;
  box-shadow: 3px 2px 2px #d7dfe9;
  height: 600px;
  width: 850px;
`
export const MemeContainer = styled.div`
  margin-left: 30px;
  margin-top: 100px;
  width: 350px;
`
export const Heading = styled.h1`
  color: #35469c;
  font-size: 25px;
  font-weight: 700;
  width: 200px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-bottom: 20px;
`
export const InputLabel = styled.label`
  color: #5a7184;
  font-size: 12px;
  font-family: 'Roboto';
  margin-bottom: 5px;
`
export const InputBox = styled.input`
  width: 80px;
  height: 30px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  width: 300px;
  color: #5a7184;
  padding: 10px;
`
export const SelectContainer = styled.select`
  width: 80px;
  height: 30px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  width: 300px;
  color: #5a7184;
`
export const Options = styled.option``

export const GenerateButton = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  border-radius: 5px;
  height: 30px;
  width: 150px;
  border: 0px;
`
export const ImageContainer = styled(MemeContainer)`
  display: flex;
  flex-direction: column;
  alin-items: center;
  justify-content: space-between;
  width: 400px;
  height: 300px;
  margin-top: 150px;
  background-size: cover;
  background-image: url(${props => props.backImage});
`
export const TextHeading = styled.p`
  font-size: ${props => props.size};
  color: #ffffff;
  word-break: break-all;
  width: 350px;
  margin-left: 20px;
  text-align: center;
`
