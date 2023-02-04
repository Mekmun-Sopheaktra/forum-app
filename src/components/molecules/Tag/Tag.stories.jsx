import React from 'react';
import Tag from 'components/molecules/Tag/Tag';

export default {
  title: 'molecules/Tag',
  component: Tag,
};

export const NormalTag = () => <Tag name="IT" />;
export const ActiveTag = () => <Tag name="IT" isActive />;
