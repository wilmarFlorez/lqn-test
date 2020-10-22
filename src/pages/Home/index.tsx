import React, { useContext } from "react";
import { Layout } from "antd";
import { ListOfCards } from "../../containers/ListOfCards";
import { StarwarsContext } from "../../contexts/StarwarsContext";
import { Modal } from "../../components/Modal";
import { PaginationComponent } from "../../components/Pagination";
import { AppContext } from "../../contexts/App";
import { Loader } from "../../components/Loader/idex";
import "./styles.css";

const { Content, Header, Footer } = Layout;

export const Home: React.FC = () => {
  const { people, total, setCurrentPage, currentPage } = useContext(
    StarwarsContext,
  );
  const { appLoading } = useContext(AppContext);

  const changePageHandler = (current: number) => {
    setCurrentPage(current);
  };

  return (
    <Layout>
      <Header>
        <img
          className="sw-logo"
          src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"
          alt="star wars logo"
        />
      </Header>
      {appLoading ? (
        <Loader />
      ) : (
        <>
          <Content style={{ padding: "0 50px" }}>
            <ListOfCards people={people} />
            <Modal />
          </Content>
          <Footer className="footer">
            <PaginationComponent
              current={currentPage}
              changePage={changePageHandler}
              totalCount={total}
            />
          </Footer>
        </>
      )}
    </Layout>
  );
};
