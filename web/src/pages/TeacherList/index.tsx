import React from 'react';
import './styles.css';

import PageHeader from '../../components/PageHeader/';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

const TeacherList: React.FC = () => {
  return (
    <div className='container' id='page-teacher-list'>
      <PageHeader title='Estes são os Proffys disponíveis.'>
        <form id='search-teachers'>
          <Select
            name='subject'
            label='Matéria'
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Inglês', label: 'Inglês' },
              { value: 'História', label: 'História' },
              { value: 'Física', label: 'Física' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
            ]}
          />
          <Select
            name='week_day'
            label='Dia da Semana'
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />

          <Input name='time' label='Hora' type='time' />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
