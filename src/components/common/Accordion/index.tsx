import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react';

import Col from '../_Grid/Col';
import Row from '../_Grid/Row';
import Checkbox from '../Checkbox';
import Text from '../Text/Text';
import * as styles from './Accordion.css';

interface AccordionProps {
  items: string[];
  selections: string[];
  setSelections: Dispatch<SetStateAction<string[]>>;
  trigger: string | ReactNode;
}

const Accordion = ({
  items,
  selections,
  setSelections,
  trigger,
}: AccordionProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const itemList = items?.map(item => {
    const handleChange = () => {
      if (selections.includes(item)) {
        setSelections(selections.filter(selection => selection !== item));
      } else {
        setSelections([...selections, item]);
      }
    };

    return (
      <Row key={item} className={styles.itemWrapper}>
        <label className={styles.label}>
          <Checkbox
            isChecked={selections.includes(item)}
            onChange={handleChange}
          />
          <Text>{item}</Text>
        </label>
      </Row>
    );
  });

  return (
    <Col>
      <div onClick={handleClick} className={styles.trigger}>
        {trigger}
      </div>
      {open && <div className={styles.content}>{itemList}</div>}
    </Col>
  );
};

export default Accordion;
