import { Toaster } from "react-hot-toast";
import Background from "./components/layout/Background";
import BookmarksButton from "./components/bookmarks/BookmarksButton";
import { Container } from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import { Header, HeaderTop } from "./components/layout/Header";
import JobItemContent from "./components/jobs/JobItemContent";
import JobListSearch from "./components/jobs/JobListSearch";
import Logo from "./components/layout/Logo";
import PaginationControls from "./components/search/PaginationControls";
import ResultsCount from "./components/search/ResultCount";

import Sidebar, { SidebarTop } from "./components/layout/Sidebar";
import SearchForm from "./components/search/SearchForm";
import SortingControls from "./components/search/SortingControls";
import { useSearchTextContext } from "./lib/hooks";

/**
 * The main component of the application.
 * Renders the entire application layout including the header, sidebar, job list, and footer.
 */
function App() {
  const { searchText, handleChangeSearchText } = useSearchTextContext();

  return (
    <>
      <Background />

      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>

        <SearchForm
          searchText={searchText}
          setSearchText={handleChangeSearchText}
        />
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
