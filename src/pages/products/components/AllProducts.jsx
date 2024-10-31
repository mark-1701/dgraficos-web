import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { productAdded } from '../../../redux/productsSlice';
import Product from '../../../components/common/Product';
import { getData } from '../../../services/api';
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

const AllProducts = () => {
  const toast = useRef(null);
  const dispatch = useDispatch();
  const [productData, setProductData] = useState([]);

  // agregar producto a redux
  const onAddProduct = product => {
    dispatch(productAdded(product));
    // mensaje de confirmacion
    toast.current.show({
      severity: 'info',
      summary: 'Confirmación',
      detail: 'El producto se agrego al carrito',
      life: 3000
    });
  };

  // mensaje de rechazo
  const reject = () => {
    toast.current.show({
      severity: 'warn',
      summary: 'Cancelación',
      detail: 'No se agrego al carrito',
      life: 3000
    });
  };

  // cofirmacion de dialogo
  const confirm = product => {
    confirmDialog({
      message: '¿Quieres agregar el producto al carrito?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      defaultFocus: 'accept',
      accept: () => onAddProduct(product),
      reject
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData('product');
      setProductData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="divider-x divider-y">
      <Toast ref={toast} />
      <ConfirmDialog />
      <h1 className="title">Productos</h1>
      <div className="!grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {productData.length > 0 ? (
          productData.map(product => (
            <Product key={product.id} product={product} confirm={confirm} />
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
