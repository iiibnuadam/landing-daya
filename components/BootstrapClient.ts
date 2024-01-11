"use client"

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    require('../node_modules/bootstrap/dist/js/bootstrap.bundle.js');
  }, []);

  return null;
}