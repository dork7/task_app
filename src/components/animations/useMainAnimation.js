export const useMainAnimation = () => {
  return {
    hidden: {
      x: -300,
    },
    visible: {
      x: 0,
      transition: {
        duration: 1,
        // delay: 0.4,
        type: 'spring',
        stiffness: 100,
      },
    },
    exit: {
      x: '100vw',
      transition: { ease: 'easeOut' },
    },
  };
};
