import { useAtom } from 'jotai';
import { useAtomValue } from 'jotai/utils';
import { renderHook, act } from '@testing-library/react-hooks';
import {
  filterDetailInformationIdAtom,
  textFilterInformationAtom,
} from '../../stores/searchDetailInformation';

const useTextFilterInformation = () => useAtom(textFilterInformationAtom);
const useListFilterDetailInformation = () =>
  useAtomValue(filterDetailInformationIdAtom);

describe('SearchDetailInformation store', () => {
  test('should apply a new filter', () => {
    const textFilter = renderHook(useTextFilterInformation);
    const listFilter = renderHook(useListFilterDetailInformation);
    expect(textFilter.result.current[0]).toBe('');
    expect(listFilter.result.current).not.toHaveLength(0);

    act(() => {
      textFilter.result.current[1]('random text');
    });

    expect(textFilter.result.current[0]).toBe('random text');
    expect(listFilter.result.current).toHaveLength(0);
  });
});
