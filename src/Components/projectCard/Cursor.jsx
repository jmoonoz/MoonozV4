import React from 'react'

const Cursor = ({ cursorRef }) => {
  return (
    <div
      ref={cursorRef}
      style={{
        width: 0,
        height: 0,
        // borderRadius: CURSOR_WIDTH,
        top: 0,
        left: 0,
      }}
      className="pointer-events-none overflow-hidden absolute -translate-x-1/2 -translate-y-1/2 border border-black"
    />
  )
}

export default Cursor