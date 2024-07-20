import { useEffect, useState } from "react";
import { useAuth } from "../../../context/userContext";
import { FaEdit } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import ModalForm from "../../../components/modals/modalForm";
import "./style.scss";
import useTariffService from "../../../service/tariffService";
import { api } from "../../../helpers";

const Tarif = () => {
  const { user } = useAuth();
  const [selectedData, setSelectedData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getTariffs, editTariff, deleteTariff } = useTariffService();
  const [tariffs, setTariffs] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getTariffs(setTariffs);
  }, []);

  const select = (data) => {
    console.log(data);
    setIsModalOpen(true);
    setSelectedData(data);
  };

  const onSubmit = (data) => {
    editTariff(data, selectedData._id);
  };
  const onDelete = () => {
    deleteTariff(selectedData._id);
  };
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };
  
  return (
    <div className="tarif">
      <div className="container">
        <ModalForm
          type={"tariff"}
          onDelete={onDelete}
          onSubmit={onSubmit}
          data={selectedData}
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        <div className="tarif__title">
          <span> </span>
          <p>Nos tariffs</p>
          <span> </span>
          <h2>Des prix abordables</h2>
        </div>
        <div className="tarif__content">
          {tariffs.length > 0 && tariffs?.map((elem, i) => {
            const tarifStyle = {
              backgroundImage: `url(${api}/images/${elem.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            };
            return (
            
            <div className="tarif__wrapper" style={tarifStyle} key={i}>
                <div className="tarif__edit" onClick={() => select(elem)}>
                  <FaEdit />
                </div>
                <div className="tarif__descr">
                  <h2>{elem?.title}</h2>
                  <p>{`A PARTIR DE ${elem?.price}€`}</p>
                </div>
              </div>
            );
          })}
          <div>
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageChange}
              pageRangeDisplayed={5}
              containerClassName={"pagination"}
              activeClassName={"active"}
              pageCount={totalPages}
              previousLabel="<"
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarif;
