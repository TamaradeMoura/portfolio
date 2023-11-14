/* eslint-disable prettier/prettier */
import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
    <Avatar />
    <Titulo fontSize={18}>Tamara Moura</Titulo>
    <Paragrafo tipo="secundario" fontSize={14}>TamaradeMoura</Paragrafo>
    <Descricao tipo="principal" fontSize={12}>
      Engenheira Front-End
    </Descricao>
    <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
