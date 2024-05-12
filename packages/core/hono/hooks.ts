import { useCallback as honoUseCallback, useEffect, useId, useRef as honoUseRef, useState } from 'hono/jsx';

interface HonoRefObject<T> {
  current: T;
}

export { useState, useId, useEffect };

export const useRef = honoUseRef as <T>(initialValue: T | null) => HonoRefObject<T>;

export const useCallback = <T extends (...args: any[]) => any>(
  callback: T,
  deps: readonly any[],
): T => honoUseCallback(callback, deps);
