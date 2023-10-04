import {
  BoxButton,
  Content,
  GetDataUserContainer,
  Inputs,
  Wrapper,
} from './styles'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import axios from 'axios'
import { ReposContext } from '../../context/ReposContext'
import { useContext, useState } from 'react'
import { api } from '../../lib/axios'
import { Navigate } from 'react-router-dom'

interface DataFormProps {
  nameUser: string
  nameRepositorio: string
}

const formValidationSchema = zod.object({
  nameUser: zod.string(),
  nameRepositorio: zod.string(),
})

type formValidationSchemaProps = zod.infer<typeof formValidationSchema>

export function GetDataUser() {
  const [sucess, setSucess] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting /* isSubmitted */ },
  } = useForm<formValidationSchemaProps>()

  const { addingInformationInTheState } = useContext(ReposContext)

  // async function handleSubmitDataGithub(dataForm: DataFormProps) {
  //   try {
  //     const responseUser = await api.get(`${dataForm.nameUser}`)
  //     const dataUser = await responseUser.data

  //     const responseIssues = await axios.get(
  //       `https://api.github.com/repos/${dataForm.nameUser}/${dataForm.nameRepositorio}/issues`,
  //     )
  //     const dataIssues = await responseIssues.data

  //     console.log(dataIssues, dataUser)

  //     addingInformationInTheState(dataIssues, dataForm, dataUser)

  //     setSucess(true)
  //   } catch (error: any) {
  //     if (error.response.status === 403) {
  //       alert('sua busca na api do github acabou, tente novamente mais tarde')
  //       return
  //     }
  //     alert('seu usuario ou seu repositorio está errado')
  //   }
  // }

  async function handleSubmitDataGithub(dataForm: DataFormProps) {
    try {
      const responseUser = await api.get(`${dataForm.nameUser}`)
      const dataUser = await responseUser.data

      const responseIssues = await axios.get(
        `https://api.github.com/repos/${dataForm.nameUser}/${dataForm.nameRepositorio}/issues`,
      )
      const dataIssues = await responseIssues.data

      if (!dataIssues[0]) {
        alert(
          'Esse repositorio que você adicionou não possui Issues. Adicione outro',
        )
        return
      }

      addingInformationInTheState(dataIssues, dataForm, dataUser)

      setSucess(true)
    } catch (error: any) {
      if (error.response.status === 403) {
        alert('sua busca na api do github acabou, tente novamente mais tarde')
        return
      }
      alert('Sua conta de usuário ou repositório está incorreta.')
    }
  }

  return (
    <GetDataUserContainer>
      <Wrapper>
        <Content>
          {sucess && <Navigate to="/home" />}
          <strong>Coloque aqui os dados de um repositorio</strong>
          <form onSubmit={handleSubmit(handleSubmitDataGithub)}>
            <Inputs>
              <input
                type="text"
                {...register('nameUser')}
                placeholder="Nome do usuário"
                pattern="^\S+$"
                required
              />
              <input
                type="text"
                {...register('nameRepositorio')}
                placeholder="Repositorio"
                pattern="^\S+$"
                required
              />
            </Inputs>

            <BoxButton>
              <button type="submit" disabled={isSubmitting}>
                Confirmar
              </button>
            </BoxButton>
          </form>
        </Content>
      </Wrapper>
    </GetDataUserContainer>
  )
}
