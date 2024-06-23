import React from "react";
import MobilConfirmation from "../../assets/images/Mobil-beep-beep.png";
import "../../styles/styleDashboard.css";

interface DeleteConfirmationProps {
  onDelete: () => void;
  onCancel: () => void;
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  onDelete,
  onCancel,
}) => {
  return (
    <div className="delete-confirmation-overlay">
      <div className="delete-confirmation-content">
        <img src={MobilConfirmation} alt="" />
        <p className="title-card">Menghapus Data Mobil</p>
        <p>
          Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin
          menghapus?
        </p>
        <div className="d-flex flex-row gap-2 justify-content-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={onDelete}
          >
            Ya
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={onCancel}
          >
            Tidak
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
