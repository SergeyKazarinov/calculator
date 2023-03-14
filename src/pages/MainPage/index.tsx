import { FC } from 'react';
import { Checkbox } from 'modules/checkBoxConstructor';
import { CalcElements } from 'modules/calcElements';
import { ConstructorElement } from 'modules/constructor';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import s from './style.module.scss';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => (
  <section className={s.mainGrid}>
    <Checkbox />
    <DndProvider backend={HTML5Backend}>
      <CalcElements />
      <ConstructorElement />
    </DndProvider>
  </section>
);

export default MainPage;
