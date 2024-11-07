import React from 'react'
import { Button } from '@/components/ui/button'

function BottomBar() {
  return (
    <div style={{ backgroundColor: 'grey', display: 'flex', justifyContent: 'center', gap: '10px', padding: '10px', position: 'fixed', bottom: '0' }}>
      <a href="/submit" style={{ textDecoration: 'none' }}>
        <Button style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px' }}>Submit</Button>
      </a>
      <a href="/locations" style={{ textDecoration: 'none' }}>
        <Button style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px' }}>Location</Button>
      </a>
    </div>
  )
}

export default BottomBar