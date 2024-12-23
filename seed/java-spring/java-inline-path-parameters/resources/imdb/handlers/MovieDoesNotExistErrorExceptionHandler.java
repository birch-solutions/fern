/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.imdb.handlers;

import java.lang.Object;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import resources.imdb.exceptions.MovieDoesNotExistError;

@RestControllerAdvice
public final class MovieDoesNotExistErrorExceptionHandler {
  @ExceptionHandler(MovieDoesNotExistError.class)
  ResponseEntity<Object> handle(MovieDoesNotExistError movieDoesNotExistError) {
    return new ResponseEntity<>(movieDoesNotExistError.getBody(), null, MovieDoesNotExistError.STATUS_CODE);
  }
}
