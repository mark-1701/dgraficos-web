import Benefit from './Benefit';

function Benefits() {
  return (
    <div className="section px-4 sm:px-8">
      <h1 className="title">Beneficios</h1>
      <div className="!grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4">
        <Benefit
          iconName="security"
          title="Seguridad"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, laudantium?"
        />
        <Benefit
          iconName="schedule"
          title="A tiempo"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, laudantium?"
        />
        <Benefit
          iconName="support_agent"
          title="Asistencia"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, laudantium?"
        />
        <Benefit
          iconName="inventory_2"
          title="Almacen"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, laudantium?"
        />
      </div>
    </div>
  );
}

export default Benefits;
