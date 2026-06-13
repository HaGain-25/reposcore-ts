/**
 * CLI 로깅 상태를 관리하고 출력하는 헬퍼 모듈입니다.
 */

let verboseEnabled = false;

/**
 * 진단 및 진행 로그의 출력 여부를 설정합니다.
 *
 * @param verbose true이면 진단 로그가 출력됩니다.
 */
export const setVerbose = (verbose: boolean): void => {
  verboseEnabled = verbose;
};

/**
 * verbose 모드가 활성화되었을 때만 표준 에러(stderr)로 로그를 출력합니다.
 *
 * @param args 출력할 메시지나 객체
 */
export const logVerbose = (...args: unknown[]): void => {
  if (verboseEnabled) {
    console.error(...args);
  }
};
