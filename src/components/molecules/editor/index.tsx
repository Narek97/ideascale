'use client';
import React, {
  forwardRef,
  HTMLAttributes,
  memo,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';
import Quill, { QuillOptions } from 'quill';

import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
// import 'quill-emoji/dist/quill-emoji.css';

// Quill.register('modules/emoji', QuillEmoji);

interface Props extends HTMLAttributes<HTMLDivElement> {
  readOnly?: boolean;
  config?: QuillOptions;
  defaultValue?: any;
  onTextChange?: (...args: any) => void;
  onSelectionChange?: (...args: any) => void;
}

const Editor = forwardRef<Quill | undefined, Props>(
  ({ readOnly, defaultValue, onTextChange, onSelectionChange, ...rest }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const quillInstance = useRef<Quill>();

    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);

    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange;
      onSelectionChangeRef.current = onSelectionChange;
    });

    useEffect(() => {
      const container = containerRef.current!;
      const editorContainer = container.appendChild(container.ownerDocument.createElement('div'));
      const quill = new Quill(editorContainer, {
        modules: {
          toolbar: {
            container: [
              ['bold', 'italic', 'underline'],
              [{ color: [] }, { background: [] }],
              ['blockquote'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['link', 'image', 'video'],
              ['clean'],
              // ['emoji'], // Add emoji to toolbar
            ],
          },
          // 'emoji-toolbar': true,
          // 'emoji-shortname': true,
        },
        theme: 'snow',
        readOnly,
      });

      quillInstance.current = quill;

      // Set initial value if provided
      if (defaultValue) {
        quill.root.innerHTML = defaultValue;
      }

      quill.on('text-change', () => {
        onTextChangeRef.current?.(quill.root.innerHTML);
      });

      quill.on('selection-change', (...args: any) => {
        onSelectionChangeRef.current?.(...args);
      });

      return () => {
        // @ts-ignore
        quill.off('text-change');
        // @ts-ignore
        quill.off('selection-change');
      };
    }, [defaultValue, readOnly]);

    // Expose the Quill instance via ref
    useImperativeHandle(ref, () => quillInstance.current);

    return <div {...rest} ref={containerRef} />;
  },
);

Editor.displayName = 'Editor';

export default memo(Editor);
