import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { Content, SearchFormContainer, Wrapper } from './styles'
import * as zod from 'zod'
import { ReposContext } from '../../context/ReposContext'
import { useContext } from 'react'

// import { useState } from 'react'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormSchemaProps = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const { dataIssues, fetchIssues } = useContext(ReposContext)

  const {
    register,
    handleSubmit,
    // watch,
    formState: { isSubmitting },
  } = useForm<SearchFormSchemaProps>()

  // const searchForm = watch('query')

  async function handleSearchTransaction(data: SearchFormSchemaProps) {
    await fetchIssues(data.query)
  }
  return (
    <SearchFormContainer>
      <Wrapper>
        <div>
          <strong>Publicações</strong>
          <span>{dataIssues[0]?.number} publicações</span>
        </div>
        <Content onSubmit={handleSubmit(handleSearchTransaction)}>
          <input
            type="text"
            placeholder="Buscar por Issues"
            {...register('query')}
          />
          <button disabled={isSubmitting}>
            <MagnifyingGlass />
            {isSubmitting ? 'carregando...' : 'buscar'}
          </button>
        </Content>
      </Wrapper>
    </SearchFormContainer>
  )
}
