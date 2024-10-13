import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { productAdded } from '../../../redux/productsSlice';
import { getData } from '../../../services/api';
import Product from '../../../components/common/Product';
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

const Products = () => {
  const toast = useRef(null);
  const dispatch = useDispatch();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData('product');
      setProductData(data);
    };
    fetchData();
  }, []);


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

  return (
    <div className="divider-y divider-x">
      <Toast ref={toast} />
      <ConfirmDialog />
      <h1 className="title">Productos</h1>
      <div className="!grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {productData.length > 0 ? (
          productData
            .slice(0, 4)
            .map(product => (
              <Product key={product.id} product={product} confirm={confirm} />
            ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>
      <div className="text-right mt-4">
        <Link to={'/products'} className="link">
          Ver más productos...
        </Link>
      </div>
    </div>
  );
};

export default Products;
