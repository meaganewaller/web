import clsx from 'clsx';

export const Container = ({ className = '', ...props }) => {
  return <div className={clsx('container mx-auto px-4', className)} {...props} />;
};
