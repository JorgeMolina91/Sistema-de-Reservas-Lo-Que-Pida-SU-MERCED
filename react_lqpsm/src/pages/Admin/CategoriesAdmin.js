import React, { useState, useEffect } from 'react'
import { Loader } from 'semantic-ui-react'
import { HeaderPage, TableCategoryAdmin, AddEditCategoryForm } from '../../components/Admin'
import { ModalBasic } from '../../components/Common'
import { useCategory } from '../../hooks'

export function CategoriesAdmin() {
  const [showModal, setShowModal] = useState(false)
  const [titleModal, setTitleModal] = useState(null)
  const [contentModal, setContentModal] = useState(null)

  const { loading, categories, getCategories } = useCategory()
  
  useEffect(() => {
    getCategories()
  }, [])

  const openCloseModal = () => setShowModal (prev => !prev) //Para abrir o cerrar el modal

  const addCategory = () => {
    setTitleModal('Nueva Categoria')
    setContentModal(<AddEditCategoryForm />)
    openCloseModal()
  }

  return (
    <>
        <HeaderPage
            title = 'Categorias'
            btnTitle = 'Nueva Categoria'
            btnClick = {addCategory}
        />
        {loading ? (
          <Loader active inline='centered'>
            Cargando...
          </Loader>
        ): (
          <TableCategoryAdmin
            categories = {categories}
          />
        )}

        <ModalBasic 
          show = {showModal}
          onClose = {openCloseModal}
          title = {titleModal}
          children = {contentModal}
        />

    </>
  )
}
