/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.types.types;

import java.lang.String;
import java.util.Optional;
import resources.commons.types.types.Tag;

public interface IMovie {
  MovieId getId();

  Optional<MovieId> getPrequel();

  String getTitle();

  String getFrom();

  double getRating();

  String getType();

  Tag getTag();

  Optional<String> getBook();
}
