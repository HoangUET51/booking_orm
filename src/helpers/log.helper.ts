import winston, { Logger } from "winston";
import path from "path";
import "winston-daily-rotate-file";
import { Request } from "express";

class _LogHelper {
  private consoleLogger: Logger;
  private fileLogger: Logger;

  constructor() {
    this.consoleLogger = winston.createLogger({
      level: "info",
      format: this.getLogFormatConfig(),
      transports: [getConsoleTransport()],
    });
    this.fileLogger = winston.createLogger({
      level: "info",
      format: this.getLogFormatConfig(),
      transports: [getDailyRotateFileTransport("error"), getConsoleTransport()],
    });
  }

  protected getLogFormatConfig() {
    return winston.format.combine(
      winston.format.timestamp(),
      winston.format.metadata({
        fillExcept: ["timestamp", "service", "level", "message"],
      }),
      this.getLogFormat()
    );
  }

  protected getLogFormat() {
    return winston.format.printf(({ timestamp, level, message, metadata }) => {
      let logStr: any = `${timestamp} | ${level.toUpperCase()}`;
      logStr += ` : ${message}`;

      const { req } = metadata;
      if (req) {
        const { method, originalUrl, headers, params, query, body } = req;
        logStr += `\n  ${method}:${originalUrl}`;
        logStr += `\n    Header: ${JSON.stringify(headers)}`;
        logStr += `\n    Params: ${JSON.stringify(params)}`;
        logStr += `\n    Query: ${JSON.stringify(query)}`;
        logStr += `\n    Body: ${JSON.stringify(body)}`;
      }

      return logStr;
    });
  }

  public logAppErrorRequest(req: Request) {
    return (baCode: number, message: string) => {
      this.fileLogger.error(`${baCode} | ${message}`, { req });
    };
  }

  public logErrorRequest(req: Request) {
    return (message: string) => {
      this.fileLogger.error(message, { req });
    };
  }

  public logErrorFile(message: string, ...extras: string[]) {
    const logStr = [message, ...extras].join(" ");
    this.fileLogger.error(`${logStr}`);
  }

  public logInfo(message: string, ...extras: string[]) {
    const logStr = [message, ...extras].join(" ");
    this.consoleLogger.info(`${logStr}`);
  }

  public logError(message: string, ...extras: string[]) {
    const logStr = [message, ...extras].join(" ");
    this.consoleLogger.error(`${logStr}`);
  }
}

function getDailyRotateFileTransport(level: "error" | "info") {
  return new winston.transports.DailyRotateFile({
    level,
    filename: "%DATE%.log",
    dirname: path.join("logs", level),
    datePattern: "YYYY-MM-DD",
  });
}

function getConsoleTransport() {
  return new winston.transports.Console();
}

const LogHelper = new _LogHelper();
export default LogHelper;
