import { Toaster } from "react-hot-toast";
import Background from "./components/Background";
import BookmarksButton from "./components/BookmarksButton";
import { Container } from "./components/Container";
import Footer from "./components/Footer";
import { Header, HeaderTop } from "./components/Header";
import JobItemContent from "./components/JobItemContent";
import JobListSearch from "./components/JobListSearch";
import Logo from "./components/Logo";
import PaginationControls from "./components/PaginationControls";
import ResultsCount from "./components/ResultCount";

import Sidebar, { SidebarTop } from "./components/Sidebar";
// import SearchForm from "./components/SearchForm";
import SortingControls from "./components/SortingControls";

function App() {
  return (
    <>
      <Background />

      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>

        {/* <SearchForm /> */}
      </Header>

      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount />
            <SortingControls />
          </SidebarTop>

          <JobListSearch />

          <PaginationControls />
        </Sidebar>

        <JobItemContent />
      </Container>

      <Footer />

      <Toaster position="top-right" />
    </>
  );
}

export default App;
