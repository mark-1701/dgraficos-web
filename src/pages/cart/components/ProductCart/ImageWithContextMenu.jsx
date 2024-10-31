import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ImageNotFound from '/src/assets/image_not_found.jpg';

function ImageWithContextMenu({ productId }) {
  const dispatch = useDispatch();
  const [contextMenu, setContextMenu] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [selectdImage, setSelectedImage] = useState(null);
  const formattedInputFileId = `product-file-${productId}`;

  // * Función para manejar el clic derecho y mostrar el menú
  const handleContextMenu = event => {
    event.preventDefault(); // Prevenir el menú por defecto del navegador
    setContextMenu({
      mouseX: event.clientX,
      mouseY: event.clientY
    });
    setShowMenu(true);
  };

  // Función para ocultar el menú
  const handleClickOutside = () => {
    setShowMenu(false);
  };

  // manejador de clic para subir imagen
  const handleUploadImageClick = () => {
    // acciona el clic de input file
    document.getElementById(formattedInputFileId).click();
  };

  // * manejador para captar cambios en el input al subir imagen
  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      // * cargar la imagen en la miniatura
      const reader = new FileReader();
      reader.onload = e => {
        // Actualizar el estado con la URL de la imagen cargada
        setSelectedImage(e.target.result);
      };
      // Leer el archivo como una URL de datos
      reader.readAsDataURL(file);
    }
  };

  // * Detectar clics fuera del menú para cerrarlo
  useEffect(() => {
    if (showMenu) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div>
      <p className="text-center">Diseño</p>
      {/* Imagen con el evento onContextMenu */}
      <img
        src={selectdImage ?? ImageNotFound}
        alt="Imagen con menú contextual"
        className="w-20 h-20 object-cover cursor-pointer"
        onContextMenu={handleContextMenu}
      />

      {/* Menú contextual */}
      {showMenu && (
        <ul
          className="shadow-md bg-white list-none"
          style={{
            position: 'absolute',
            top: `${contextMenu.mouseY}px`,
            left: `${contextMenu.mouseX}px`,
            zIndex: 1000
          }}
        >
          <li
            onClick={handleUploadImageClick}
            className="px-3 py-2.5 cursor-pointer hover:bg-blue-600 hover:text-white"
          >
            Cargar imágen
          </li>
          <li
            onClick={() => {
              // redirección a página para el editor de archivos
              window.open(import.meta.env.VITE_IMAGE_EDITOR_URL, "_blank");
            }}
            className="px-3 py-2.5 cursor-pointer hover:bg-blue-600 hover:text-white"
          >
            Diseñar imágen
          </li>
        </ul>
      )}
      {/* Input file oculto */}
      <input
        type="file"
        id={formattedInputFileId}
        name={formattedInputFileId}
        // solo permitir imagenes
        accept="image/*"
        className="hidden"
        onChange={e => {
          handleFileChange(e);
        }}
      />
    </div>
  );
}

export default ImageWithContextMenu;
